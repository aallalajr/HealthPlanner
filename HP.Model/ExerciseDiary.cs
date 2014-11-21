using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HP.Model
{
    public class ExerciseDiary
    {
        public int Id { get; set; }
        public int Set { get; set; }
        public int Weight { get; set; }
        public int Rating { get; set; }
        public int ExerciseId { get; set; }
    }
}
