import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/Admin'

export default class FirstAdminSeeder extends BaseSeeder {
  public async run() {
    await Admin.create({
      email: 'mathsant_99@hotmail.com',
      password: 'secret',
    })
  }
}
