using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HP.Service
{
    public class RecipeQuery
    {
        static List<IngredientListItem> ingredients = new List<IngredientListItem>
        { 
            new IngredientListItem { ID = 1, Name = "Tomato", Rating = 1, },
            new IngredientListItem { ID = 2, Name = "Onion", Rating = 1, },
            new IngredientListItem { ID = 3, Name = "Butter", Rating = 3, },
            new IngredientListItem { ID = 4, Name = "Chicken Broth", Rating = 2, },
        };
    }
}