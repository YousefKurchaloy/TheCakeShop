using Models.Order;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Utilities.Enums;

namespace Models.Customer
{
    public class CustomerDto
    {

        public CustomerDto()
        {
            Orders = new List<OrderDto>();
        }
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        [NotMapped]
        public string FullName => $"{FirstName} {LastName}";

        public Gender Gender { get; set; }
        public string PhoneNo { get; set; }
        public string Email { get; set; }
        public List<OrderDto> Orders { get; set; }
    }
}
