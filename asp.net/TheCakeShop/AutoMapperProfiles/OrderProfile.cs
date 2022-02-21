using AutoMapper;
using Entities;
using Dtos.Order;

namespace TheCakeShop.AutoMapperProfiles
{
    public class OrderProfile : Profile
    {
        public OrderProfile()
        {
            CreateMap<Order, OrderDto>().ReverseMap();
        }
    }
}
