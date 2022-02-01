using AutoMapper;
using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Order;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheCakeShop.Data;

namespace TheCakeShop.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        #region Data and Constructors 
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public OrderController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        #endregion

        #region Public Actions 

        [HttpGet]
        public async Task<IEnumerable<OrderDto>> GetOrders()
        {
            var orders = await _context
                .Orders
                .Include(o => o.Products)
                .Include(o => o.Customer)
                .ToListAsync();
            var orderDtos = _mapper.Map<List<Order>, List<OrderDto>>(orders);
            return orderDtos;
        }

        [HttpGet("{id}")]
        public async Task<OrderDto> GetOrder(int id)
        {
            var order = await _context
                .Orders
                .Include(o => o.Products)
                .Include(o => o.Customer)
                .Where(b => b.Id == id)
                .SingleOrDefaultAsync();

            var orderDto = _mapper.Map<Order, OrderDto>(order);

            return orderDto;
        }

        [HttpPost]
        public async Task CreateOrder([FromBody] OrderCreateEditDto orderCreateEditDto)
        {
            var order = _mapper.Map<OrderCreateEditDto, Order>(orderCreateEditDto);
            await AddProductsToOrder(orderCreateEditDto, order);

            var orderPriceTotal = order.Products.Sum(item => item.ProductPrice);
            orderPriceTotal = order.Price;

            await _context.AddAsync(order);
            await _context.SaveChangesAsync();
        }

        [HttpPut("{id}")]
        public async Task EditOrder(int id, [FromBody] OrderCreateEditDto orderCreateEditDto)
        {
            var order = await _context.Orders.FindAsync(id);
            _mapper.Map(orderCreateEditDto, order);

            _context.Update(order);
            await _context.SaveChangesAsync();

            await UpdateOrderProductsAndSave(orderCreateEditDto,order);
        }

        [HttpDelete("{id}")]
        public async Task DeleteOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

        }
        #endregion

        #region Private methods

        private async Task AddProductsToOrder(OrderCreateEditDto orderCreateEditDto,Order order)
        {
            var products = await _context.Products.Where(p => orderCreateEditDto.ProductsIds.Contains(p.Id)).ToListAsync();
            order.Products.AddRange(products);
        }
        private async Task UpdateOrderProductsAndSave(OrderCreateEditDto orderCreateEditDto,Order inputOrder)
        {
            var order = await _context.Orders.Include(o => o.Products).Where(o => o.Id == inputOrder.Id).SingleAsync();

            order.Products.Clear();

            if(orderCreateEditDto != null && orderCreateEditDto.ProductsIds.Count > 0)
            {
                var products = await _context.Products.Where(p => orderCreateEditDto.ProductsIds.Contains(p.Id)).ToListAsync();
                order.Products.AddRange(products);
            }
            _context.Update(order);
            await _context.SaveChangesAsync();
        }
        #endregion
    }

}
