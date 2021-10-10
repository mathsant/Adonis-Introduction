import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/Admin'

export default class CreateAdminSeeder extends BaseSeeder {
  public async run() {
    await Admin.createMany([
      {
        email: 'admin@teste.com',
        password: 'secret',
        role: 'admin',
      },
      {
        email: 'normal@teste.com',
        password: 'secret',
        role: 'normal',
      },
    ])
  }
}
