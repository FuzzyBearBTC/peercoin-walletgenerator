//https://raw.github.com/peercoinjs/peercoinjs-lib/09e8c6e184d6501a0c2c59d73ca64db5c0d3eb95/src/address.js
Peercoin.Address = function (bytes) {
	if ("string" == typeof bytes) {
		bytes = Peercoin.Address.decodeString(bytes);
	}
	this.hash = bytes;
	this.version = Peercoin.Address.networkVersion;
};

Peercoin.Address.networkVersion = 0x37; // mainnet

/**
* Serialize this object as a standard Peercoin address.
*
* Returns the address as a base58-encoded string in the standardized format.
*/
Peercoin.Address.prototype.toString = function () {
	// Get a copy of the hash
	var hash = this.hash.slice(0);

	// Version
	hash.unshift(this.version);
	var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });
	var bytes = hash.concat(checksum.slice(0, 4));
	return Peercoin.Base58.encode(bytes);
};

Peercoin.Address.prototype.getHashBase64 = function () {
	return Crypto.util.bytesToBase64(this.hash);
};

/**
* Parse a Peercoin address contained in a string.
*/
Peercoin.Address.decodeString = function (string) {
	var bytes = Peercoin.Base58.decode(string);
	var hash = bytes.slice(0, 21);
	var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });

	if (checksum[0] != bytes[21] ||
			checksum[1] != bytes[22] ||
			checksum[2] != bytes[23] ||
			checksum[3] != bytes[24]) {
		throw "Checksum validation failed!";
	}

	var version = hash.shift();

	if (version != 0) {
		throw "Version " + version + " not supported!";
	}

	return hash;
};
