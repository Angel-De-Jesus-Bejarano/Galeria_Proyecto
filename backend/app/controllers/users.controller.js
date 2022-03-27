const userModel = require('../../models/users');
const boom = require('@hapi/boom');

const createUser = async (req, res) => {
  const { name_user, age, email, password } = req.body;
  try {
    let newUser = await userModel.create(
      {
        name_user,
        age,
        email,
        password,
      },
      {
        fields: ['name_user', 'age', 'email', 'password'],
      }
    );

    if (newUser) {
      res.status(205).json({
        message: 'usuario creado con exito',
        data: newUser,
      });
    }

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'algo ha ido mal...',
      data: {},
    });
  }
};

const findUser = async (req, res) => {
  try {
    const users = await userModel.findAll();
    res.status(200).json({
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Algo ha ido mal. No hay datos para mostrar',
    });
  }
};

const findOneUser = async (req, res) => {
  const { id } = req.params;
  try {

      const user = await userModel.findOne({
        where: {
          id_user: id,
        },
      });

      if(!user){
        res.status(404).json({
          message: boom.notFound('Usuario no encontrado')
        })

      }else{
        res.status(200).json(user);
      }



  } catch (error) {

    res.status(500).json({
      message: 'Algo ha ido mal. No hay datos para mostrar.',
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await userModel.destroy({
      where: {
        id_user: id,
      },
    });
    res.status(200).json({
      message: 'Usuario eliminado con éxito',
      data: deleteRowCount,
    });
  } catch (error) {

    res.status(500).json({
      message: 'Algo ha ido mal. No hay datos para mostrar.',
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name_user, age, email, password } = req.body;

  try {
    const users = await userModel.findAll({
      attributes: ['id_user', 'name_user', 'age', 'email', 'password'],
      where: {
        id_user: id,
      },
    });

    if (users.length > 0) {
      users.forEach(async (user) => {
        await user.update({
          name_user,
          age,
          email,
          password,
        });
      });
    }

    res.status(200).json({
      message: 'Usuario actualizado con éxito',
      data: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Algo ha ido mal. No hay datos para mostrar.',
    });
  }
};

module.exports = {
  createUser,
  findUser,
  findOneUser,
  deleteUser,
  updateUser,
};
