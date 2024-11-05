import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SongsService, Song } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() song: Song) {
    return this.songsService.create(song);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get('genero/:genero')
  findByGenero(@Param('genero') genero: string) {
    return this.songsService.findByGenero(genero);
  }

  @Get('artist/:artist')
  findByArtist(@Param('artist') artist: string) {
    return this.songsService.findByArtist(artist);
  }

  @Put('genero/:genero')
  updateByGenero(@Param('genero') genero: string, @Body() songData: Partial<Song>) {
    const updatedSong = this.songsService.updateByGenero(genero, songData);
    if (updatedSong) {
      return updatedSong;
    }
    return { message: "Song not found" };
  }

  @Put('artist/:artist')
  updateByArtist(@Param('artist') artist: string, @Body() songData: Partial<Song>) {
    const updatedSong = this.songsService.updateByArtist(artist, songData);
    if (updatedSong) {
      return updatedSong;
    }
    return { message: "Song not found" };
  }

  @Delete('genero/:genero')
  removeByGenero(@Param('genero') genero: string) {
    this.songsService.remove(genero);
    return { message: "Song removed successfully" };
  }

  @Delete('artist/:artist')
  removeByArtist(@Param('artist') artist: string) {
    this.songsService.removeByArtist(artist);
    return { message: "Songs by artist removed successfully" };
  }
}