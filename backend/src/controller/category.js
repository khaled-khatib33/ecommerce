const Category = require("../models/category");
const slugify = require("slugify");


function createCategories (Categories , parentId = null){
     
     const categoryList = [];
     let category;
     if (parentId == null){

      category = categories.filter(cat => cat.parentId == undefined);
     } else {
      category = categories.filter(cat => cat.parentId == parentId);

     }
     for (let cat of category ){
      categoryList.push({
         _id:cate.id,
         name:cate.name,
         slug:cate.slug,
         children: createCategories(categories, cate._id)
       });
     }
     return categoryList;

}
exports.addCategory = (req, res) => {
    let categoryUrl;
  
    const categoryObj = {
      name: req.body.name,
      slug: slugify(req.body.name),
    }
    if (req.file){
      categoryObj.categoryImge = process.env.API+"/public" + req.file.filename;
    }
    if (req.body.parentId) {
      categoryObj.parentId = req.body.parentId;
    }
    const cat = new Category(categoryObj);
    cat.save((error, category) => {
      if (error) return res.status(400).json({ error });
      if (category) {
        return res.status(201).json({ category });
      }
    });
  }

  exports.getCategories = (req,res)=>{
   Category.find({})
   .exec((error,getCategories)=>{
    if (error) return res.status(400).json({ error });
    if (Categories){

      const categoryList = createCategories(Categories);
        res.status(200).json({categoryList})
    }
   })
  }