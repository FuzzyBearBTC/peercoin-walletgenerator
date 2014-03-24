ninja.wallets.vanitywallet = {
	open: function () {
		document.getElementById("vanityarea").style.display = "block";
	},

	close: function () {
		document.getElementById("vanityarea").style.display = "none";
		document.getElementById("vanitystep1area").style.display = "none";
		document.getElementById("vanitystep2area").style.display = "none";
		document.getElementById("vanitystep1icon").setAttribute("class", "more");
		document.getElementById("vanitystep2icon").setAttribute("class", "more");
	},

	generateKeyPair: function () {
		var key = new Peercoin.ECKey(false);
		var publicKey = key.getPubKeyHex();
		var privateKey = key.getPeercoinHexFormat();
		document.getElementById("vanitypubkey").innerHTML = publicKey;
		document.getElementById("vanityprivatekey").innerHTML = privateKey;
		document.getElementById("vanityarea").style.display = "block";
		document.getElementById("vanitystep1area").style.display = "none";
	},

	addKeys: function () {
		var privateKeyWif = ninja.translator.get("vanityinvalidinputcouldnotcombinekeys");
		var peercoinAddress = ninja.translator.get("vanityinvalidinputcouldnotcombinekeys");
		var publicKeyHex = ninja.translator.get("vanityinvalidinputcouldnotcombinekeys");
		try {
			var input1KeyString = document.getElementById("vanityinput1").value;
			var input2KeyString = document.getElementById("vanityinput2").value;

			// both inputs are public keys
			if (ninja.publicKey.isPublicKeyHexFormat(input1KeyString) && ninja.publicKey.isPublicKeyHexFormat(input2KeyString)) {
				// add both public keys together
				if (document.getElementById("vanityradioadd").checked) {
					var pubKeyByteArray = ninja.publicKey.getByteArrayFromAdding(input1KeyString, input2KeyString);
					if (pubKeyByteArray == null) {
						alert(ninja.translator.get("vanityalertinvalidinputpublickeysmatch"));
					}
					else {
						privateKeyWif = ninja.translator.get("vanityprivatekeyonlyavailable");
						peercoinAddress = ninja.publicKey.getPeercoinAddressFromByteArray(pubKeyByteArray);
						publicKeyHex = ninja.publicKey.getHexFromByteArray(pubKeyByteArray);
					}
				}
				else {
					alert(ninja.translator.get("vanityalertinvalidinputcannotmultiple"));
				}
			}
			// one public key and one private key
			else if ((ninja.publicKey.isPublicKeyHexFormat(input1KeyString) && ninja.privateKey.isPrivateKey(input2KeyString))
							|| (ninja.publicKey.isPublicKeyHexFormat(input2KeyString) && ninja.privateKey.isPrivateKey(input1KeyString))
						) {
				privateKeyWif = ninja.translator.get("vanityprivatekeyonlyavailable");
				var pubKeyHex = (ninja.publicKey.isPublicKeyHexFormat(input1KeyString)) ? input1KeyString : input2KeyString;
				var ecKey = (ninja.privateKey.isPrivateKey(input1KeyString)) ? new Peercoin.ECKey(input1KeyString) : new Peercoin.ECKey(input2KeyString);
				// add
				if (document.getElementById("vanityradioadd").checked) {
					var pubKeyCombined = ninja.publicKey.getByteArrayFromAdding(pubKeyHex, ecKey.getPubKeyHex());
				}
				// multiply
				else {
					var pubKeyCombined = ninja.publicKey.getByteArrayFromMultiplying(pubKeyHex, ecKey);
				}
				if (pubKeyCombined == null) {
					alert(ninja.translator.get("vanityalertinvalidinputpublickeysmatch"));
				} else {
					peercoinAddress = ninja.publicKey.getPeercoinAddressFromByteArray(pubKeyCombined);
					publicKeyHex = ninja.publicKey.getHexFromByteArray(pubKeyCombined);
				}
			}
			// both inputs are private keys
			else if (ninja.privateKey.isPrivateKey(input1KeyString) && ninja.privateKey.isPrivateKey(input2KeyString)) {
				var combinedPrivateKey;
				// add both private keys together
				if (document.getElementById("vanityradioadd").checked) {
					combinedPrivateKey = ninja.privateKey.getECKeyFromAdding(input1KeyString, input2KeyString);
				}
				// multiply both private keys together
				else {
					combinedPrivateKey = ninja.privateKey.getECKeyFromMultiplying(input1KeyString, input2KeyString);
				}
				if (combinedPrivateKey == null) {
					alert(ninja.translator.get("vanityalertinvalidinputprivatekeysmatch"));
				}
				else {
					peercoinAddress = combinedPrivateKey.getPeercoinAddress();
					privateKeyWif = combinedPrivateKey.getPeercoinWalletImportFormat();
					publicKeyHex = combinedPrivateKey.getPubKeyHex();
				}
			}
		} catch (e) {
			alert(e);
		}
		document.getElementById("vanityprivatekeywif").innerHTML = privateKeyWif;
		document.getElementById("vanityaddress").innerHTML = peercoinAddress;
		document.getElementById("vanitypublickeyhex").innerHTML = publicKeyHex;
		document.getElementById("vanitystep2area").style.display = "block";
		document.getElementById("vanitystep2icon").setAttribute("class", "less");
	},

	openCloseStep: function (num) {
		// do close
		if (document.getElementById("vanitystep" + num + "area").style.display == "block") {
			document.getElementById("vanitystep" + num + "area").style.display = "none";
			document.getElementById("vanitystep" + num + "icon").setAttribute("class", "more");
		}
		// do open
		else {
			document.getElementById("vanitystep" + num + "area").style.display = "block";
			document.getElementById("vanitystep" + num + "icon").setAttribute("class", "less");
		}
	}
};