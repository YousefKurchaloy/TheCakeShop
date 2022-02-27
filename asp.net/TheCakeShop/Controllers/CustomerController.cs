using AutoMapper;
using Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Dtos.Customer;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheCakeShop.Data;

namespace TheCakeShop.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        #region Data and Constructors 

        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public CustomerController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        #endregion

        #region Actions 
        
        [HttpGet]
        public async Task<IEnumerable<CustomerDto>> GetCustomers()
        {
            var customers= await _context.Customers.Include(c => c.Orders).ToListAsync();
            var customerDtos = _mapper.Map<List<Customer>, List<CustomerDto>>(customers);
            return customerDtos;
        }

        [HttpGet("{id}")]
        public async Task<CustomerDto> GetCustomer(int id)
        {
            var customer = await _context.Customers.Include(c => c.Orders).Where(c => c.Id == id).SingleOrDefaultAsync();
            var customerDto = _mapper.Map<Customer,CustomerDto>(customer);
            return customerDto;
        }

        [HttpPost]
        public async Task CreateCustomer([FromBody] CustomerDto customerDto)
        {
            var customer = _mapper.Map<CustomerDto,Customer>(customerDto);
            await _context.AddAsync(customer);
            await _context.SaveChangesAsync();

        }

        [HttpPut("{id}")]
        public async Task EditCustomer(int id, [FromBody] CustomerDto customerDto)
        {
            var customer = await _context.Customers.FindAsync(id);
            _mapper.Map(customerDto, customer);
            _context.Update(customer);
            await _context.SaveChangesAsync();

        }

        [HttpDelete("{id}")]
        public async Task DeleteCustomer(int id)
        {
            var customer = await _context.Customers.FindAsync(id);
            var ordersCustomerId = await _context.Orders.Where(o => o.CustomerId == id).ToListAsync();

            foreach (var customerId in customer.Orders)
            {
                ordersCustomerId = null;
            }

            _context.Customers.Remove(customer);
            await _context.SaveChangesAsync();

        }
        [HttpGet("{id}")]
        public async Task<List<Order>> GetCustomerOrderHistory(int id)
        {
            var customerOrders = await _context.Orders.Where(o => o.CustomerId == id).ToListAsync();
            return customerOrders;
        }

        #endregion

    }
}
