using Models.Customer;
using Models.Product;
using System.Collections.Generic;
using Utilities.Enums;

namespace Models.Order
{
    public class OrderCreateEditDto
    {
        
            public OrderCreateEditDto()
            {
            ProductsIds = new List<int>();
            }
            public int Id { get; set; }
            public double Price { get; set; }
            public City City { get; set; }
            public string Address { get; set; }
            public List<int> ProductsIds { get; set; }
            public CustomerDto Customer { get; set; }
            public OrderStatus OrderStatus { get; set; }
        
    }
}
