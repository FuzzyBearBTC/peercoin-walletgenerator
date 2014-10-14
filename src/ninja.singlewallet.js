ninja.wallets.singlewallet = {
	open: function () {
		if (document.getElementById("ppcaddress").innerHTML == "") {
			ninja.wallets.singlewallet.generateNewAddressAndKey();
		}
		document.getElementById("singlearea").style.display = "block";
	},

	close: function () {
		document.getElementById("singlearea").style.display = "none";
	},

	// generate peercoin address and private key and update information in the HTML
	generateNewAddressAndKey: function () {
		try {
			var key = new Peercoin.ECKey(false);
			var peercoinAddress = key.getPeercoinAddress();
			var privateKeyWif = key.getPeercoinWalletImportFormat();
			document.getElementById("ppcaddress").innerHTML = peercoinAddress;
			document.getElementById("ppcprivwif").innerHTML = privateKeyWif;
			var keyValuePair = {
				"qrcode_public": peercoinAddress,
				"qrcode_private": privateKeyWif
			};
			ninja.qrCode.showQrCode(keyValuePair, 4);
		}
		catch (e) {
			// browser does not have sufficient JavaScript support to generate a peercoin address
			alert(e);
			document.getElementById("ppcaddress").innerHTML = "error";
			document.getElementById("ppcprivwif").innerHTML = "error";
			document.getElementById("qrcode_public").innerHTML = "";
			document.getElementById("qrcode_private").innerHTML = "";
		}
	}
};
