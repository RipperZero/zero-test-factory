import { FC, useState } from "react";
import { produce } from "immer";

// @see https://react.dev/learn/updating-arrays-in-state#updating-objects-inside-arrays

type ArtWork = {
  id: number;
  title: string;
  seen: boolean;
};

const initialList: ArtWork[] = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

const ItemList: FC<{
  artworks: ArtWork[];
  onToggle: (artworkId: number, nextSeen: boolean) => void;
}> = ({ artworks, onToggle }) => {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

const UpdateArray: FC = () => {
  // #region hooks start
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleToggleMyList = (artworkId: number, nextSeen: boolean) => {
    // #region update by shallow copy ---start
    // #region shallow copy A ---start
    // BUG [this copy is shallow]
    // const myNextList = [...myList];
    // const artwork = myNextList.find((a) => a.id === artworkId);

    // if (artwork === undefined) {
    //   return;
    // }

    // artwork.seen = nextSeen;
    // setMyList(myNextList);
    // #endregion shallow copy A ---end

    // #region shallow copy B ---start
    // setMyList((pre) => {
    //   const artwork = pre.find((a) => a.id === artworkId);

    //   if (artwork !== undefined) {
    //     artwork.seen = nextSeen;
    //   }

    //   // BUG [this copy is shallow]
    //   return [...pre];
    // });
    // #endregion shallow copy B ---end
    // #endregion update by shallow copy ---end

    // setMyList((pre) => {
    //   return pre.map((artwork) => {
    //     return artwork.id === artworkId
    //       ? { ...artwork, seen: nextSeen }
    //       : artwork;
    //   });
    // });

    setMyList(
      produce((draft) => {
        const foundArtWork = draft.find((draftArtWork) => {
          return draftArtWork.id === artworkId;
        });

        if (foundArtWork === undefined) {
          return;
        }

        foundArtWork.seen = nextSeen;
      }),
    );
  };

  const handleToggleYourList = (artworkId: number, nextSeen: boolean) => {
    // #region update by shallow copy ---start
    // #region shallow copy A ---start
    // BUG [this copy is shallow]
    // const yourNextList = [...yourList];
    // const artwork = yourNextList.find((a) => a.id === artworkId);

    // if (artwork === undefined) {
    //   return;
    // }

    // artwork.seen = nextSeen;
    // setYourList(yourNextList);
    // #endregion shallow copy A ---end

    // #region shallow copy B ---start
    // setYourList((pre) => {
    //   const artwork = pre.find((a) => a.id === artworkId);

    //   if (artwork !== undefined) {
    //     artwork.seen = nextSeen;
    //   }

    //   // BUG [this copy is shallow]
    //   return [...pre];
    // });
    // #endregion shallow copy B ---end
    // #endregion update by shallow copy ---end

    // setYourList((pre) => {
    //   return pre.map((artwork) => {
    //     return artwork.id === artworkId
    //       ? { ...artwork, seen: nextSeen }
    //       : artwork;
    //   });
    // });

    setYourList(
      produce((draft) => {
        const foundArtWork = draft.find((draftArtWork) => {
          return draftArtWork.id === artworkId;
        });

        if (foundArtWork === undefined) {
          return;
        }

        foundArtWork.seen = nextSeen;
      }),
    );
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
  // #endregion render functions end
};

export { UpdateArray };
