using AutoMapper;
using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Product;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheCakeShop.Data;

namespace TheCakeShop.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        #region Data and Constructors 

        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public ProductController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        #endregion

        #region Public Actions 

        [HttpGet]
        public async Task<IEnumerable<ProductDto>> GetProducts()
        {
            var products = await _context.Products.Include(p => p.Ingredients).ToListAsync();
            var productsDtos = _mapper.Map<List<Product>, List<ProductDto>>(products);
            return productsDtos;
        }

        [HttpGet("{id}")]
        public async Task<ProductDto> GetProduct(int id)
        {
            var product = await _context.Products.Include(p => p.Ingredients).Where(p => p.Id == id).SingleOrDefaultAsync();
            var productDto = _mapper.Map<Product, ProductDto>(product);
            return productDto;

        }

        [HttpPost]
        public async Task<int> CreateProduct([FromBody] CreateEditProductDto createEditProductDto)
        {
            var product = _mapper.Map<CreateEditProductDto, Product>(createEditProductDto);
            await AddIngredientsToProduct(createEditProductDto, product);

            await _context.AddAsync(product);
            return await _context.SaveChangesAsync();
        }

        [HttpPut("{id}")]
        public async Task EditProduct(int id, [FromBody] CreateEditProductDto createEditProductDto)
        {
            var product = await _context.Products.FindAsync(id);
            _mapper.Map(createEditProductDto, product);

            _context.Update(product);
            await _context.SaveChangesAsync();

            await UpdateProductIngredientsAndSave(createEditProductDto, product);
        }

        [HttpDelete("{id}")]
        public async Task DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

        }

        #endregion

        #region Private methods

        private async Task AddIngredientsToProduct(CreateEditProductDto createEditProductDto, Product product)
        {
            var ingredients = await _context.Ingredients.Where(i => createEditProductDto.IngredientsIds.Contains(i.Id)).ToListAsync();
            product.Ingredients.AddRange(ingredients);
        }
        private async Task UpdateProductIngredientsAndSave(CreateEditProductDto createEditProductDto, Product inputProduct)
        {
            var product = await _context.Products.Include(p => p.Ingredients).Where(p => p.Id == inputProduct.Id).SingleAsync();

            product.Ingredients.Clear();
             
            if(createEditProductDto.IngredientsIds != null && createEditProductDto.IngredientsIds.Count > 0)
            {
                var ingredients = await _context.Ingredients.Where(ing => createEditProductDto.IngredientsIds.Contains(ing.Id)).ToListAsync();    
                product.Ingredients.AddRange(ingredients);
            
            }
            _context.Update(product);
            await _context.SaveChangesAsync();

        }

        #endregion

    }
}
