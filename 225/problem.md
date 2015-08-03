# Reddit Challenge #225
## Diagonal Maze

[Link to this challenge can be found here](https://www.reddit.com/r/dailyprogrammer/comments/3f9o7k/20150731_challenge_225_intermediate_diagonal_maze/). A maze can be represented using characters as follows:

    +-+-+-+-+-+
      |       |
    + +-+-+ + +
    | |     | |
    + + + + + +
    |   | |   |
    +-+-+ +-+-+
    |     |   |
    + + +-+ + +
    | |     |
    +-+-+-+-+-+

However, the exact same maze can also be represented diagonally using slashes, like this:

         \
       / /\
      / /\ \
     /\   \ \
    /  \/    \
    \/   / / /
     \ \/\  /
      \   \/
       \/ /
        \

Your task today is to convert from the first format (cardinal) to the second (diagonal).

### Formal inputs and outputs
You'll be given a number N on one line, followed by N further lines of input of a cardinal axis aligned maze, like so:

    11
    +-+-+-+-+-+
      |       |
    + +-+-+ + +
    | |     | |
    + + + + + +
    |   | |   |
    +-+-+ +-+-+
    |     |   |
    + + +-+ + +
    | |     |
    +-+-+-+-+-+

The maze cells will not necessarily be one-by-one, so watch out!

Output the diagonal-ified maze, like the one shown above (same as in description).
