using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using HP.Domain;
using HP.Model;

namespace HP.Service
{
    public interface IRecipeQuery
    {
        IQueryable<RecipeListItem> GetAllRecipes();
    }
    public class RecipeQuery //: IRecipeQuery
    {
        //static List<Ingredient> ingredients = new List<Ingredient>
        //{ 
        //    new Ingredient { ID = 1, Name = "Tomato", Rating = 1, },
        //    new Ingredient { ID = 2, Name = "Onion", Rating = 1, },
        //    new Ingredient { ID = 3, Name = "Butter", Rating = 3, },
        //    new Ingredient { ID = 4, Name = "Chicken Broth", Rating = 2, },
        //};

        //Recipe[] recipes = new Recipe[] 
        //{
        //    new Recipe { ID = 1, Name = "Garden Fresh Tomato Soup", Calories = "130", CookTime = 35, Servings = 6, URL = "http://allrecipes.com/recipe/garden-fresh-tomato-soup/", Rating = 1, Ingredients = ingredients, },
        //    new Recipe { ID = 2, Name = "Tomato Soup", Calories = "230", CookTime = 25, Servings = 2, URL = "http://allrecipes.com/recipe/garden-fresh-tomato-soup/", Rating = 2, Ingredients = ingredients, },
        //    new Recipe { ID = 3, Name = "Garden Soup", Calories = "330", CookTime = 55, Servings = 4, URL = "http://allrecipes.com/recipe/garden-fresh-tomato-soup/", Rating = 3, Ingredients = ingredients, },
        //};

        //public IQueryable<Recipe> GetAllRecipes()
        //{
        //    return recipes.AsQueryable();
        //}
    }
}