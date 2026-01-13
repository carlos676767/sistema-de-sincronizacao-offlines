import { Telegraf } from "telegraf";
import JwtAuth from "../utils/jwt.js";

export default class Bot {
  static bot = new Telegraf(process.env.TKBOT);


  static botCommand() {
    //usar aqui apenas se for a primeira vez para obter o id do user.
    this.bot.command(`obterIdUser`, (ctx) => {
        
      const messsage = ctx.from.id;
      console.log(messsage);
      
    });

    this.bot.launch()
  }



  static async sendTokenUser(){
    this.bot.launch()

    setInterval(async() => {
       
        await this.bot.telegram.sendMessage(
            6990206597,
            `🔐 Acesso Liberado
    
    Aqui está o seu token de acesso para utilizar todos os seus ativos em nuvem com segurança.
    
    🔑 Token: ${JwtAuth.createTokenJwt()}
    
    ⏱️ Importante: um novo token é gerado automaticamente a cada 5 minutos.
    
    ⚠️ Não compartilhe este token com ninguém. Ele é pessoal e intransferível.`
        )
      }, 5 * 60 * 1000);
  }

}
