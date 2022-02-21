using AutoMapper;
using Entities;
using Dtos.Product;

namespace TheCakeShop.AutoMapperProfiles
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductDto>().ReverseMap();
        }
    }
}
