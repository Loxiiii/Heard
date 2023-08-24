import Image from 'next/image';
import { useEffect, useState } from 'react';
import modUrl from '../helpers/appleKit/modUrl';
import modArtistUrl from '../helpers/appleKit/modArtistUrl'

let sampleSong = {
    "id": "1451903882",
    "type": "songs",
    "href": "/v1/catalog/us/songs/1451903882",
    "attributes": {
        "albumName": "Graduation",
        "genreNames": [
            "Hip-Hop/Rap",
            "Music"
        ],
        "trackNumber": 9,
        "releaseDate": "2007-09-05",
        "durationInMillis": 237507,
        "isrc": "USUM70749095",
        "artwork": {
            "width": 1500,
            "height": 1500,
            "url": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/db/ce/e7/dbcee73f-015e-d994-abe4-58fbdfd0569c/00602577027864.rgb.jpg/{w}x{h}bb.jpg",
            "bgColor": "623387",
            "textColor1": "fffffd",
            "textColor2": "edd3ca",
            "textColor3": "dfd6e5",
            "textColor4": "d1b3bd"
        },
        "composerName": "Kanye West & Eric Hudson",
        "playParams": {
            "id": "1451903882",
            "kind": "song"
        },
        "url": "https://music.apple.com/us/album/flashing-lights-feat-dwele/1451901307?i=1451903882",
        "discNumber": 1,
        "hasLyrics": true,
        "isAppleDigitalMaster": false,
        "name": "Flashing Lights (feat. Dwele)",
        "previews": [
            {
                "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/79/20/85/792085b0-3d8c-d216-2cf9-530f1a25872e/mzaf_14729429506292122632.plus.aac.p.m4a"
            }
        ],
        "contentRating": "explicit",
        "artistName": "Kanye West"
    }
}



let ArtistCard = ({ artist }) => {

    let [url, setUrl] = useState('')

    useEffect(() => {
        if (Object.keys(artist).length > 0) {
            if(artist.attributes.artwork) {
                let url = modUrl(artist.attributes.artwork.url, 500, 500)
                setUrl(url)

            }

        }
    }, [artist])

    return (
        <>
            <div id='card' className="flex flex-row mt-3 ml-3 items-center between">
                <div className='w-1/4'>
                    <Image src={url} height={50} width={50} className='rounded-full' placeholder='empty'></Image>

                </div>
                <div id='card-right' className='flex flex-col truncate w-2/3'>
                    <div className='font-bold '>{artist.attributes.name}</div>
                    {/* <div className='font-light'>{artist.attributes.artistName}</div> */}
                </div>
            </div>
            <div className='w-3/4 border border-black self-center mt-3'></div>
        </>
    )
}

export default ArtistCard