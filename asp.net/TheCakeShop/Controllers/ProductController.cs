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
            var products = await _context.Products.ToListAsync();
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
        public async Task CreateProduct([FromBody] ProductDto productDto)
        {
            var product = _mapper.Map<ProductDto, Product>(productDto);
            await _context.AddAsync(product);
            await _context.SaveChangesAsync();
        }

        [HttpPut("{id}")]
        public async Task EditProduct(int id, [FromBody] ProductDto productDto)
        {
            var product = await _context.Products.FindAsync(id);
            _mapper.Map(productDto, product);
            _context.Update(product);
            await _context.SaveChangesAsync();
        }

        [HttpDelete("{id}")]
        public async Task DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

        }

        #endregion

    }
}
