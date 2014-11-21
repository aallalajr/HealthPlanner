using System.Linq;
using System.Web.Http;
using HP.Model;
using HP.DataAccess;
using HP.Tasks;
using Newtonsoft.Json.Linq;
using Breeze.ContextProvider;
using Breeze.WebApi2;
using System.Collections.Generic;
using System;

namespace HealthPlanner.Web.Controllers
{
    [BreezeController]
    public class BreezeController : ApiController
    {
        // Todo: inject via an interface rather than "new" the concrete class
        readonly HPRepository _repository = new HPRepository();

        [HttpGet]
        public string Metadata()
        {
            return _repository.Metadata;
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return _repository.SaveChanges(saveBundle);
        }

        [HttpGet]
        public IQueryable<Recipe> Recipes()
        {
            return _repository.Recipes;
        }

        [HttpGet]
        public Recipe GetRecipe(int id)
        {
            var t = _repository.Recipes.Single(x => x.Id == id);
            return t;                
        }

        [HttpGet]
        public IQueryable<Food> GetIngredients(int id)
        {
            return (from i in _repository.Ingredients
                    join f in _repository.Food on i.FoodId equals f.Id
                    where i.RecipeId == id
                    select f);
        }

        [HttpGet]
        public IQueryable<Food> GetFood()
        {
            var foods = _repository.Food.ToList();
            foreach(var item in foods)
            {
                item.Rating = item.LowSugar ? 1 : item.HighSugar ? 3 : 2; 
            } 
            return foods.AsQueryable();
        }

        [HttpGet]
        public IQueryable<FoodDiary> Meals()
        {
            return _repository.Meals;
        }
        
        [HttpGet]
        public IQueryable<ExcerciseDiaryListItem> GetExerciseDiary()
        {
            return (from ed in _repository.ExerciseDiary
                    join e in _repository.Exercise on ed.ExerciseId equals e.Id
                    select new ExcerciseDiaryListItem
                    {
                        Name = e.Name,
                        Type = e.Type,
                        Sets = ed.Set,
                        Weight = ed.Weight,
                        Rating = ed.Rating,
                    });
        }
    }
}