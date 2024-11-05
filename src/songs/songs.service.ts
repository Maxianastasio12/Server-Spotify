import { Injectable } from '@nestjs/common';

export interface Song {
  genero: string;
  titulo: string;
  artist: string;
}

@Injectable()
export class SongsService {
  private songs: Song[] = [];

  constructor() {
    const song1 = {
      genero: "Rock Argentino",
      titulo: "Necesito tu amor",
      artist: "Charly García"
    };
    const song2 = {
      genero: "Folklóre Argentino",
      titulo: "Motivos",
      artist: "Abel Pintos"
    };
    const song3 = {
      genero: "Dance-pop",
      titulo: "Billie Jean",
      artist: "Michael Jackson"
    };
    
    this.songs.push(song1, song2, song3);
  }

  create(song: Song): Song {
    const newSong = { genero: song.genero, titulo: song.titulo, artist: song.artist };
    this.songs.push(newSong);
    return newSong;
  }

  findAll(): Song[] {
    return this.songs;
  }

  findByGenero(genero: string): Song | undefined {
    return this.songs.find(song => song.genero === genero);
  }

  findByArtist(artist: string): Song | undefined {
    return this.songs.find(song => song.artist === artist);
  }

  updateByGenero(genero: string, songData: Partial<Song>): Song | null {
    const songIndex = this.songs.findIndex(song => song.genero === genero);
    if (songIndex > -1) {
      this.songs[songIndex] = { ...this.songs[songIndex], ...songData };
      return this.songs[songIndex];
    }
    return null;
  }

  updateByArtist(artist: string, songData: Partial<Song>): Song | null {
    const songIndex = this.songs.findIndex(song => song.artist === artist);
    if (songIndex > -1) {
      this.songs[songIndex] = { ...this.songs[songIndex], ...songData };
      return this.songs[songIndex];
    }
    return null;
  }

  remove(genero: string): void {
    this.songs = this.songs.filter(song => song.genero !== genero);
  }

  removeByArtist(artist: string): void {
    this.songs = this.songs.filter(song => song.artist !== artist);
  }
}