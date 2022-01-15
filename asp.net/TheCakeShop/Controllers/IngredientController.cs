using AutoMapper;
using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Ingredient;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheCakeShop.Data;

namespace TheCakeShop.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        #region Data and Constructors 

        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public IngredientController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        #endregion

        #region Public Actions 
        [HttpGet]
        public async Task<IEnumerable<IngredientDto>> GetIngredients()
        {
            var ingredients = await _context.Ingredients.ToListAsync();
            var ingredientDtos = _mapper.Map<List<Ingredient>, List<IngredientDto>>(ingredients);
            return ingredientDtos;
        }

        [HttpGet("{id}")]
        public async Task<IngredientDto> GetIngredient(int id)
        {
            var ingredient = await _context.Ingredients.Where(o => o.Id == id).SingleOrDefaultAsync();
            var ingredientDto = _mapper.Map<Ingredient, IngredientDto>(ingredient);
            return ingredientDto;
        }

        [HttpPost]
        public async Task CreateIngredient([FromBody] IngredientDto ingredientDto)
        {
            var ingredient = _mapper.Map<IngredientDto, Ingredient>(ingredientDto);
            await _context.AddAsync(ingredient);
            await _context.SaveChangesAsync();
        }

        [HttpPut("{id}")]
        public async Task EditIngredient(int id, [FromBody] IngredientDto ingredientDto)
        {
            var ingredient = await _context.Ingredients.FindAsync(id);
            _mapper.Map(ingredientDto, ingredient);
            _context.Update(ingredient);
            await _context.SaveChangesAsync();

        }

        [HttpDelete("{id}")]
        public async Task DeleteIngredient(int id)
        {
            var ingredient = await _context.Ingredients.FindAsync(id);
            _context.Ingredients.Remove(ingredient);
            await _context.SaveChangesAsync();

        }

        #endregion
    }
}
