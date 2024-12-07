import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import bencode from 'bencode'; // You need to install this package: npm install bencode

// Function to create a torrent file
// export function createTorrentFile(filePath, fileName, trackerUrl, chunkSize, outputFile) {
//     const fileSize = fs.statSync(filePath).size;
//     const numChunks = Math.ceil(fileSize / chunkSize);

//     const torrentData = {
//         announce: trackerUrl,
//         hashinfo: {
//             file_name: fileName,
//             num_chunks: numChunks,
//             chunk_size: chunkSize,
//             file_size: fileSize
//         }
//     };

//     // Bencode the torrent data
//     const encodedData = bencode.encode(torrentData);

//     // Write the bencoded data to a .torrent file
//     fs.writeFileSync(outputFile, encodedData);
//     console.log(`Torrent file '${outputFile}' created successfully!`);
//     return outputFile;
// }

// Function to create a torrent file
export function createTorrentFile(filePath, fileName, trackerUrl, chunkSize, outputFile) {
    try {
        console.log('File path:', filePath);
        // console.log('File content preview:', fs.readFileSync(filePath, 'utf-8').slice(0, 100));

        const fileSize = fs.statSync(filePath).size;
        const fileStream = fs.createReadStream(filePath);

        // Metadata for the torrent file
        const torrentInfo = {
            name: fileName,          // File name
            'piece length': chunkSize, // Chunk size
            length: fileSize,          // Total file size
            pieces: Buffer.alloc(0),   // SHA-1 hashes of chunks (start with empty buffer)
        };

        const hashChunks = [];
        const buffer = Buffer.alloc(chunkSize);

        fileStream.on('data', (chunk) => {
            const hash = crypto.createHash('sha1').update(chunk).digest();
            hashChunks.push(hash); // Collect the SHA-1 hashes of chunks
        });

        fileStream.on('end', () => {
            // Concatenate all the piece hashes into one Buffer
            const piecesBuffer = Buffer.concat(hashChunks);
            torrentInfo.pieces = piecesBuffer;

            // Torrent file structure
            const torrentData = {
                announce: trackerUrl, // Tracker URL
                info: torrentInfo,    // Metadata about the file
            };

            // Bencode the torrent data
            const encodedData = bencode.encode(torrentData);

            // Write the bencoded data to a .torrent file
            fs.writeFileSync(outputFile, encodedData);
            console.log(`Torrent file '${outputFile}' created successfully!`);
        });

        fileStream.on('error', (error) => {
            console.error('Error reading file stream:', error);
            throw error;
        });

    } catch (error) {
        console.error('Error creating torrent file:', error);
        throw error;
    }
}

// // Set variables
// const chunkSize = 512 * 1024;
// const fileName = "a.pdf";
// const filePath = path.join("./Share_File", fileName);
// const trackerUrl = "http://localhost:5000";
// const outputFile = path.join("./Torrent_File", "a.torrent");

// Call the function to create a torrent file
// createTorrentFile(filePath, fileName, trackerUrl, chunkSize, outputFile);