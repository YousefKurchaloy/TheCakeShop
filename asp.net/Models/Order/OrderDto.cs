using Dtos.Customer;
using Dtos.Product;
using System;
using System.Collections.Generic;
using Utilities.Enums;

namespace Dtos.Order
{
    public class OrderDto
    {
        
            public OrderDto()
            {
                Products = new List<ProductDto>();
            }
            public int Id { get; set; }
            public double Price { get; set; }
            public City City { get; set; }
            public string Address { get; set; }
            public OrderStatus OrderStatus { get; set; }

            public DateTime OrderTime { get; set; }

            public int? CustomerId { get; set; }
            public CustomerDto Customer { get; set; }

            public List<ProductDto> Products { get; set; }
        

    }
}
