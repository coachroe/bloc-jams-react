import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import styled from 'styled-components';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <LibraryWrapper>
        <section className="library">
          {
            this.state.albums.map( (album, index) =>
              <AlbumWrapper>
                <Link to={`/album/${album.slug}`} key={index}>
                  <AlbumImage src={album.albumCover} alt={album.title} />
                  <div>{album.title}</div>
                  <div>{album.artist}</div>
                  <div>{album.songs.length} songs</div>
                </Link>
              </AlbumWrapper>
            )
          }
        </section>
      </LibraryWrapper>
    );
  }
}

const LibraryWrapper = styled.div`
  display: grid;
  place-content: center;
  position: relative;
  border-radius: 5px;
  padding: 10px;
  outline: 1px solid #fafafa;
  transition: outline ease-in 0.2s;
  &:hover,
  &:focus {
    outline: 1px solid #eaeaea;
  }
`;

const AlbumWrapper = styled.div`
  display: grid;
  place-content: center;
  position: relative;
  border-radius: 5px;
  padding: 10px;
  outline: 1px solid #fafafa;
  transition: outline ease-in 0.2s;
  &:hover,
  &:focus {
    outline: 1px solid #eaeaea;
  }
`;

const AlbumImage = styled.img`
  height: auto;
  min-height: 200px;
  max-height: 200px;
  width: auto;
  min-width: 150px;
  max-width: 200px;
  border-radius: 50%;
  align-self: center;
  margin-bottom: 5px;
`;

export default Library;
