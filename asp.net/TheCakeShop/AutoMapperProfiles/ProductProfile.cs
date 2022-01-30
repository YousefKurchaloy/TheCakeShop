using AutoMapper;
using Entities;
using Models.Product;

namespace TheCakeShop.AutoMapperProfiles
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductDto>().ReverseMap();
            CreateMap<Product, CreateEditProductDto>().ReverseMap();
        }
    }
}
