import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      database:'Project-dot-in',
      username: 'root',
      password:'root',
      port:3306,
      autoLoadEntities:true,
      synchronize:true
    }),
    ProjectsModule,
    AuthModule,
    CategoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
