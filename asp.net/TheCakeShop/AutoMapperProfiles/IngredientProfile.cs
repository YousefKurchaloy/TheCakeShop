using AutoMapper;
using Entities;
using Models.Ingredient;

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
