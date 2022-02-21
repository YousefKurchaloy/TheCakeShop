using AutoMapper;
using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Dtos.Order;
using System;
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
                .Where(o => o.Id == id)
                .SingleOrDefaultAsync();

            var orderDto = _mapper.Map<Order, OrderDto>(order);

            return orderDto;
        }

        [HttpPost]
        public async Task CreateOrder([FromBody] OrderDto orderDto)
        {
            var order = _mapper.Map<OrderDto, Order>(orderDto);

            await UpdateOrderProducts(orderDto, order);
            SumProductPriceAndAddToOrder(orderDto, order);

            order.OrderTime = DateTime.Now;
           

            await _context.AddAsync(order);
            await _context.SaveChangesAsync();
        }

        [HttpPut("{id}")]
        public async Task EditOrder(int id, [FromBody] OrderDto orderDto)
        {
            var order = await _context
                              .Orders
                              .Include(o => o.Products)
                              .Include(o => o.Customer)
                              .Where(o => o.Id == id)
                              .SingleOrDefaultAsync();

            _mapper.Map(orderDto, order);

            await UpdateOrderProducts(orderDto,order);
            SumProductPriceAndAddToOrder(orderDto, order);

            if (orderDto.CustomerId.HasValue)
            {
                var customer = await _context.Customers.FindAsync(orderDto.CustomerId);
                order.Customer = customer;
            }

            _context.Update(order);
            await _context.SaveChangesAsync();

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

        private void SumProductPriceAndAddToOrder(OrderDto orderDto, Order order)
        {
            var productIds = GetProductsIdsFromDto(orderDto);
            order.Price = _context.Products.Where(p => productIds.Contains(p.Id)).Sum(p => p.ProductPrice);
        }

        private async Task UpdateOrderProducts(OrderDto orderDto,Order order)
        {   var productIds = GetProductsIdsFromDto(orderDto);
            var products = await _context.Products.Where(p => productIds.Contains(p.Id)).ToListAsync();

            order.Products.Clear();
            order.Products.AddRange(products);
        }
        private List<int> GetProductsIdsFromDto(OrderDto orderDto)
        {
            var productsIds = new List<int>();

            foreach (var product in orderDto.Products)
            {
                productsIds.Add(product.Id);
            }

            return productsIds;
        }
        #endregion
    }

}
