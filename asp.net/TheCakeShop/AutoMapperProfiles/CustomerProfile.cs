using AutoMapper;
using Entities;
using Models.Customer;

namespace TheCakeShop.AutoMapperProfiles
{
    public class CustomerProfile : Profile
    {
        public CustomerProfile()
        {
            CreateMap<Customer, CustomerDto>().ReverseMap();

        }
    }
}
