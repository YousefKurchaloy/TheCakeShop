using AutoMapper;
using Entities;
using Dtos.Ingredient;

namespace TheCakeShop.AutoMapperProfiles
{
    public class IngredientProfile : Profile
    {
        public IngredientProfile()
        {
            CreateMap<Ingredient, IngredientDto>().ReverseMap();
        }
    }
}
