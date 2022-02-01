using AutoMapper;
using Entities;
using Models.Order;

namespace TheCakeShop.AutoMapperProfiles
{
    public class OrderProfile : Profile
    {
        public OrderProfile()
        {
            CreateMap<Order, OrderDto>().ReverseMap();
            CreateMap<Order, OrderCreateEditDto>().ReverseMap();
        }
    }
}
