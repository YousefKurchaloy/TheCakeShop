using System.Collections.Generic;
using Utilities.Enums;

namespace Entities
{
    public class Order
    {
        public Order()
        {
            Products = new List<Product>();
        }
        public int Id { get; set; }
        public double Price { get; set; }
        public City City { get; set; }
        public string Address { get; set; }
        public List<Product> Products { get; set; }
        public int? CustomerId { get; set; }
        public Customer Customer { get; set; }
        public OrderStatus OrderStatus { get; set; }
    }
}
