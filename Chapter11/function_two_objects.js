var process_transaction = function(account, transaction) {
	if(account.account_number == transaction.from_account) {
		account.current_balance = account.current_balance - transaction.amount;
	} else {
		if(account.account_number == transaction.to_account) {
			account.current_balance = account.current_balance + transaction.amount;
		} else {
			// Do nothing
		}
	}
};

