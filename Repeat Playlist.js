/*
    A playlist is considered a repeating playlist if any of the songs contain a reference to a
previous song in the playlist. Otherwise, the playlist will end with the last song which points to undefined.

    Implement the method isRepeatingPlaylist that, efficiently with respect to time used,
returns true if a playlist is repeating or false if it is not.

    for example, the following code prints "true" as both songs point to each other.

    let first = new Song("Hello");
    let second = new Song("Eye of the tiger");

    first.nextSong = second;
    second.nextSong = first;

    console.log(first.isRepeatingPlaylist());

 */


class Song {
    name;
    nextSong;

    constructor(name) {
        this.name = name;
    }

    /**
     * @return {boolean} true if the playlist is repeating, false if not.
     */
    isRepeatingPlaylist() {
        let currenSong = this;
        let visitSong = [];

            while (currenSong !== undefined) {
                if (visitSong.includes(currenSong.name)){
                    return true;
                }
                visitSong.push(currenSong.name);
                currenSong = currenSong.nextSong;
            }
            return false;

    }
}

let first = new Song("Hello");
let second = new Song("Eye of the tiger");
let third = new Song("Toma");

first.nextSong = second;
second.nextSong = third;
//third.nextSong = third;

console.log(first.isRepeatingPlaylist());

/*
Hello
Eye of the tiger
Hello
Eye of the tiger
Hello
 */



/*
if playlist repeats, last song is followed by first song: Exception

if playlist repeats, starting songs con be skipped: Wrong answer

Performance test on large playlist: Wrong answer
 */

