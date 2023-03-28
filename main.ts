import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrapD() {
  const app1 = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Education API')
    .setVersion('1.0')
    .build(); 
  const document = SwaggerModule.createDocument(app1, config);
  SwaggerModule.setup('api_docs', app1, document); 
  await app1.listen(3002); 
  await app1.setGlobalPrefix('/api'); 

}
bootstrapD();


// async function bootstrapB() {
//   const app1 = await NestFactory.create(AppModule);
//   const config = new DocumentBuilder()
//     .setTitle('Education API')
//     .setVersion('1.0')
//     .build(); 
//   const document = SwaggerModule.createDocument(app1, config);
//   SwaggerModule.setup('api_docs', app1, document); 
//   await app1.listen(3001); 
//   await app1.setGlobalPrefix('/api'); 
  
// }
// bootstrapB();
