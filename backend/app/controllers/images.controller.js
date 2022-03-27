const imagesModel = require('../../models/images');
const boom = require('@hapi/boom');



const getImages = async ( req,res) =>{
  try {
    const images = await imagesModel.findAll();
    res.status(200).json({
      data: images,
    });
  } catch (error) {

    res.status(500).json({

      message: 'Algo ha ido mal. No hay datos para mostrar',
    });
  }
};

const getOneImages = async ( req,res) =>{
  const { id } = req.params;
  try {

      const image = await imagesModel.findOne({
        where: {
          id_image: id,
        },
      });

      if(!image){
        res.status(404).json({
          message: boom.notFound('Usuario no encontrado')
        })

      }else{
        res.status(200).json(image);
      }

  } catch (error) {

    res.status(500).json({
      message: 'Algo ha ido mal. No hay datos para mostrar.',
    });
  }
};

const getImagesByUser = async ( req,res) =>{
  const {user_id} = req.params;

 try {
  const images = await imagesModel.findAll({
    attributes: ['id_image', 'user_id', 'image_url', 'stars'],
    where: {user_id}
  })
  if(JSON.stringify(images) === '[]'){

    res.status(204).json({
      message: 'No hay datos para mostrar'
    })

  }else{

    res.status(200).json(images);
  }
 } catch (error) {


   res.status(500).json({
     message: 'algo ha salido mal'
   })
 }
 };

const getImageByCategory = async(req, res) =>{

  const {category_id} = req.params;

 try {
  const images = await imagesModel.findAll({
    attributes: ['id_image', 'category_id', 'image_url'],
    where: {category_id}
  })
  if(JSON.stringify(images) === '[]'){

    res.status(204).json({
      message: 'No hay datos para mostrar'
    })

  }else{

    res.status(200).json(images);
  }
 } catch (error) {


   res.status(500).json({
     message: 'algo ha salido mal'
   })
 }
}

const uploadImage = async (req, res) => {

const { body, file } = req;
const url = `http://localhost:8080/images/${file.filename}`;

  if(file){
    try {
      let newImage = await imagesModel.create({

        image_url: url,
        stars: body.stars,
        user_id: body.user_id,
        category_id: body.category_id,
        created_at: body.created_at


      },
      {
        fields: ['image_url', 'stars', 'user_id', 'category_id', 'created_at']
      });

     res.status(205).json({

        message: 'imagen subida con exito',

        data: newImage
      })

    } catch (error) {

    res.status(500).json({
      message: 'algo ha ido mal...',
      data: {},
    });
    }
  }

};

const updateImage = async (req, res) => {
  res.json('hola servidor');
};

const deleteImage = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await imagesModel.destroy({
      where: {
        id_image: id,
      },
    });
    res.status(200).json({
      message: 'Imagen eliminada con éxito',
      data: deleteRowCount,
    });
  } catch (error) {

    res.status(500).json({
      message: 'Algo ha ido mal. No hay datos para mostrar.',
    });
  }
};


module.exports = {
  uploadImage,
  updateImage,
  getImages,
  getOneImages,
  getImagesByUser,
  deleteImage,
  getImageByCategory
};
