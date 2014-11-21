using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HP.Model
{
    public class BloodSugar
    {
        public int Id { get; set; }
        public int ItemID { get; set; }
        public int Reading { get; set; }
        public DateTime CreationDate { get; set; }
    }
}