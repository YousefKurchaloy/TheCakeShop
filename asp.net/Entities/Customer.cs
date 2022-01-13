using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Utilities.Enums;

namespace Entities
{
    public class Customer
    {
        public Customer()
        {
            Orders = new List<Order>();
        }
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        [NotMapped]
        public string FullName => $"{FirstName} {LastName}";
       
        public Gender Gender { get; set; }
        public string PhoneNo { get; set; }
        public string Email { get; set; }
        public List<Order> Orders { get; set; }

    }
}
