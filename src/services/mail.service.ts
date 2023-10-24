import { MailSender, privateMessagingKeyFromHex } from '@mailchain/sdk/internal';

class MailService {
	async main() {
	// securely supply private messaging key hex bytes
	const recoveredPrivateMessagingKey = privateMessagingKeyFromHex('...');

	const mailSender = MailSender.fromSenderMessagingKey(recoveredPrivateMessagingKey);

	const { data: sentMail, error: sendMailError } = await mailSender.sendMail({
		// address related private messaging key
		from: `yoursername@mailchain.com`,
		// list of recipients (blockchain or mailchain addresses)
		to: [``],
		subject: '', // subject line
		content: {
			text: '', // plain text body
			html: '', // html body
		},
	});

	if (sendMailError) {
		throw sendMailError;
	}

	console.log(`Message sent successfully: ${sentMail}`);
}
}

//main();

//main();
/*import { Mailchain, SendMailParams } from '@mailchain/sdk';

class MailService {
	async send(params: SendMailParams) {
		const secretRecoveryPhrase = process.env.SECRET_RECOVERY_PHRASE;

		if (secretRecoveryPhrase == null) {
			throw new Error('You must provide a secret recovery phrase');
		}
		const mailchain = Mailchain.fromSecretRecoveryPhrase(secretRecoveryPhrase);

		if (!params.from || params.from === '') {
			// set the from address to current user if not provided
			const currentUser = await mailchain.user();
			params.from = currentUser.address;
		}

		const { data, error } = await mailchain.sendMail(params);
		if (error) {
			throw new Error('Mailchain error: ' + error.message);
		}

		return data;
	}
}*/

export default MailService;
