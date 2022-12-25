var BBTF_ABI = [{ "inputs": [], "name": "BlockbustersWithdrawBalanceFailed", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "ERC20AllowanceInsufficient", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "ERC20BalanceInsufficient", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "set", "type": "uint256" }, { "internalType": "uint256", "name": "cleared", "type": "uint256" }], "name": "FlagsInvalid", "type": "error" }, { "inputs": [], "name": "InitializationRecursion", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "previousAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "AdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "beacon", "type": "address" }], "name": "BeaconUpgraded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "", "type": "uint256" }], "name": "FlagsChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "implementation", "type": "address" }], "name": "Upgraded", "type": "event" }, { "inputs": [], "name": "TYPE_HASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }, { "internalType": "address", "name": "spender_", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "chainId_", "type": "uint256" }], "name": "domainSeparators", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "flags", "outputs": [{ "components": [{ "internalType": "uint256", "name": "transferLimitDisabled", "type": "uint256" }, { "internalType": "uint256", "name": "lpPair", "type": "uint256" }, { "internalType": "uint256", "name": "rewardExempt", "type": "uint256" }, { "internalType": "uint256", "name": "transferLimitExempt", "type": "uint256" }, { "internalType": "uint256", "name": "blockTransferTo", "type": "uint256" }, { "internalType": "uint256", "name": "blockTransferFrom", "type": "uint256" }, { "internalType": "uint256", "name": "sellLimitPerTxDisabled", "type": "uint256" }, { "internalType": "uint256", "name": "sellLimitPerPeriodDisabled", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDistributionDisabled", "type": "uint256" }, { "internalType": "uint256", "name": "rewardSwapDisabled", "type": "uint256" }], "internalType": "struct BlockbustersFlags.Flags", "name": "", "type": "tuple" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }], "name": "getFlags", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "provider_", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "initialized", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "proxiableUUID", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }, { "internalType": "uint256", "name": "set_", "type": "uint256" }, { "internalType": "uint256", "name": "clear_", "type": "uint256" }], "name": "setFlags", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "provider_", "type": "address" }], "name": "setProvider", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newImplementation", "type": "address" }], "name": "upgradeTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newImplementation", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "upgradeToAndCall", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to_", "type": "address" }], "name": "withdrawBalance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" }], "name": "withdrawTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

var ROUTER_ABI = [{ "inputs": [{ "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "address", "name": "_WETH", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "WETH", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "amountADesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountBDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amountTokenDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountIn", "outputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountOut", "outputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsIn", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsOut", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveB", "type": "uint256" }], "name": "quote", "outputs": [{ "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETHSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapETHForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETHSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

var BBTF_EXTENAL_ABI = [
	{
		"inputs": [],
		"name": "Exceeded24HRSellLimit",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ExceededSellLimit",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "set",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "cleared",
				"type": "uint256"
			}
		],
		"name": "FlagsInvalid",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InitializationRecursion",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "KeyError",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "KeyError",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "KeyExists",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "KeyExists",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SendFailed",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "previousAdmin",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "AdminChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "beacon",
				"type": "address"
			}
		],
		"name": "BeaconUpgraded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "FlagsChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "Ping",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "rewards_",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts_",
				"type": "uint256[]"
			}
		],
		"name": "depositRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount_",
				"type": "uint256"
			}
		],
		"name": "depositTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account_",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "rewards_",
				"type": "address[]"
			}
		],
		"name": "distributeToAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address[]",
						"name": "addresses",
						"type": "address[]"
					},
					{
						"internalType": "address[]",
						"name": "routers",
						"type": "address[]"
					},
					{
						"internalType": "uint256[]",
						"name": "ratios",
						"type": "uint256[]"
					}
				],
				"internalType": "struct BlockbustersExternalServiceProvider.RewardData",
				"name": "rewardData_",
				"type": "tuple"
			}
		],
		"name": "executeRewardsSwap",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "flags",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "transferLimitDisabled",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lpPair",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardExempt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "transferLimitExempt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "blockTransferTo",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "blockTransferFrom",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sellLimitPerTxDisabled",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sellLimitPerPeriodDisabled",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardDistributionDisabled",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardSwapDisabled",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lpInjectionDisabled",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sellLimitExempt",
						"type": "uint256"
					}
				],
				"internalType": "struct BlockbustersFlags.Flags",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index_",
				"type": "uint256"
			}
		],
		"name": "getAccountAtIndex",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account_",
				"type": "address"
			}
		],
		"name": "getAccountIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn_",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path_",
				"type": "address[]"
			}
		],
		"name": "getAmountsOut",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "left_",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "right_",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFees",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account_",
				"type": "address"
			}
		],
		"name": "getFlags",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "rewards_",
				"type": "address[]"
			}
		],
		"name": "getRewardBalances",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "rewards_",
				"type": "address[]"
			}
		],
		"name": "getTotalRewardBalances",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account_",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "rewards_",
				"type": "address[]"
			}
		],
		"name": "getUnclaimedRewards",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWallets",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts_",
				"type": "address[]"
			}
		],
		"name": "importAccounts",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "token",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "router",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "stakingWallet",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "rewardsWallet",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "liquidityWallet",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "infrastructureWallet",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "txSellLimitPerHolder",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sellLimitPer24hrs",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "serviceTimeout",
						"type": "uint256"
					}
				],
				"internalType": "struct BlockbustersExternalServiceProvider.InitializeData",
				"name": "data_",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint48",
						"name": "value",
						"type": "uint48"
					},
					{
						"components": [
							{
								"internalType": "uint48",
								"name": "staking",
								"type": "uint48"
							},
							{
								"internalType": "uint48",
								"name": "rewards",
								"type": "uint48"
							},
							{
								"internalType": "uint48",
								"name": "liquidity",
								"type": "uint48"
							},
							{
								"internalType": "uint48",
								"name": "infrastructure",
								"type": "uint48"
							}
						],
						"internalType": "struct BlockbustersExternalServiceProvider.Allocations",
						"name": "allocations",
						"type": "tuple"
					}
				],
				"internalType": "struct BlockbustersExternalServiceProvider.FeeAndAllocations",
				"name": "sellFee_",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint48",
						"name": "value",
						"type": "uint48"
					},
					{
						"components": [
							{
								"internalType": "uint48",
								"name": "staking",
								"type": "uint48"
							},
							{
								"internalType": "uint48",
								"name": "rewards",
								"type": "uint48"
							},
							{
								"internalType": "uint48",
								"name": "liquidity",
								"type": "uint48"
							},
							{
								"internalType": "uint48",
								"name": "infrastructure",
								"type": "uint48"
							}
						],
						"internalType": "struct BlockbustersExternalServiceProvider.Allocations",
						"name": "allocations",
						"type": "tuple"
					}
				],
				"internalType": "struct BlockbustersExternalServiceProvider.FeeAndAllocations",
				"name": "buyFee_",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint48",
						"name": "value",
						"type": "uint48"
					},
					{
						"components": [
							{
								"internalType": "uint48",
								"name": "staking",
								"type": "uint48"
							},
							{
								"internalType": "uint48",
								"name": "rewards",
								"type": "uint48"
							},
							{
								"internalType": "uint48",
								"name": "liquidity",
								"type": "uint48"
							},
							{
								"internalType": "uint48",
								"name": "infrastructure",
								"type": "uint48"
							}
						],
						"internalType": "struct BlockbustersExternalServiceProvider.Allocations",
						"name": "allocations",
						"type": "tuple"
					}
				],
				"internalType": "struct BlockbustersExternalServiceProvider.FeeAndAllocations",
				"name": "transferFee_",
				"type": "tuple"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialized",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "lookAhead_",
				"type": "uint256"
			}
		],
		"name": "nextAccountToDistribute",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "timestamp_",
				"type": "uint256"
			}
		],
		"name": "ping",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from_",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount_",
				"type": "uint256"
			}
		],
		"name": "process",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "progress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "oldReward_",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "newReward_",
				"type": "address"
			}
		],
		"name": "replaceReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "feeType_",
				"type": "bytes32"
			},
			{
				"components": [
					{
						"internalType": "uint48",
						"name": "value",
						"type": "uint48"
					},
					{
						"components": [
							{
								"internalType": "uint48",
								"name": "staking",
								"type": "uint48"
							},
							{
								"internalType": "uint48",
								"name": "rewards",
								"type": "uint48"
							},
							{
								"internalType": "uint48",
								"name": "liquidity",
								"type": "uint48"
							},
							{
								"internalType": "uint48",
								"name": "infrastructure",
								"type": "uint48"
							}
						],
						"internalType": "struct BlockbustersExternalServiceProvider.Allocations",
						"name": "allocations",
						"type": "tuple"
					}
				],
				"internalType": "struct BlockbustersExternalServiceProvider.FeeAndAllocations",
				"name": "feeAndAllocation_",
				"type": "tuple"
			}
		],
		"name": "setFeesAndAllocations",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "set_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "clear_",
				"type": "uint256"
			}
		],
		"name": "setFlags",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "rewards_",
				"type": "address[]"
			}
		],
		"name": "setRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "router_",
				"type": "address"
			}
		],
		"name": "setRouter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "stakingPool_",
				"type": "address"
			}
		],
		"name": "setStakingPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "wallet_",
				"type": "address"
			}
		],
		"name": "setStakingWallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "timeout_",
				"type": "uint256"
			}
		],
		"name": "setTimeout",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountOutMin_",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path_",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline_",
				"type": "uint256"
			}
		],
		"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			}
		],
		"name": "upgradeTo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "rewards_",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amount_",
				"type": "uint256[]"
			},
			{
				"internalType": "address",
				"name": "to_",
				"type": "address"
			}
		],
		"name": "withdrawRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount_",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to_",
				"type": "address"
			}
		],
		"name": "withdrawTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];

var MAX = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
var PRESALE;
var BBTF;
var ROUTER;
var BBTFEXTERNAL;


// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const EvmChains = window.EvmChains;
const Fortmatic = window.Fortmatic;

let web3Modal;

async function getBalances(x) {
	web3Modal = new Web3Modal({
		theme: "dark",
		network: 1,
		cacheProvider: true,
	});
	_web3 = new Web3('https://bsc-dataseed.binance.org/');
	BBTF = new _web3.eth.Contract(BBTF_ABI, BBTF_ADDR);
	ROUTER = new _web3.eth.Contract(ROUTER_ABI, ROUTER_ADDR);
	BBTFEXTERNAL = new _web3.eth.Contract(BBTF_EXTENAL_ABI, BBTF_EXTERNAL_ADDR);
	BBTFEXTERNAL.methods.getUnclaimedRewards("0x4242cdAE867B118293927720BaBdAb31Cd968E5D", ["0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5", "0x3297abae220272b79a134fea9b1cda413a6d95f4", "0xaa16492d95f80e488ac997933abe7aa45d838ada", "0x5A341DCF49e161CC73591f02e5f8CDE8A29733fb", "0x05De1dbFCdc876F790371508b97C337640Dcd6a9", "0x3C2e501B08CF5C16061468c96b19b32bae451dA3"]).call().then(async function (balance) {
		var pending = balance;
		console.log("pending", pending);
		document.getElementById('unsafemoon').innerHTML = new BigNumber(pending[0]).div(1e18).toFixed(2);
		document.getElementById('unbnbmp').innerHTML = new BigNumber(pending[1]).div(1e18).toFixed(2);
		document.getElementById('unbtcmp').innerHTML = new BigNumber(pending[2]).div(1e18).toFixed(2);
		document.getElementById('unreflecto').innerHTML = new BigNumber(pending[3]).div(1e18).toFixed(2);
		document.getElementById('unglow').innerHTML = new BigNumber(pending[4]).div(1e18).toFixed(2);
		document.getElementById('uneverreflect').innerHTML = new BigNumber(pending[5]).div(1e18).toFixed(2);
	});
	BBTFEXTERNAL.methods.getRewardBalances(["0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5", "0x3297abae220272b79a134fea9b1cda413a6d95f4", "0xaa16492d95f80e488ac997933abe7aa45d838ada", "0x5A341DCF49e161CC73591f02e5f8CDE8A29733fb", "0x05De1dbFCdc876F790371508b97C337640Dcd6a9", "0x3C2e501B08CF5C16061468c96b19b32bae451dA3"]).call().then(async function (balance) {
		var claimed = balance;
		console.log("claimed", claimed);
		document.getElementById('safemoon').innerHTML = new BigNumber(claimed[0]).div(1e18).toFixed(2);
		document.getElementById('bnbmp').innerHTML = new BigNumber(claimed[1]).div(1e18).toFixed(2);
		document.getElementById('btcmp').innerHTML = new BigNumber(claimed[2]).div(1e18).toFixed(2);
		document.getElementById('reflecto').innerHTML = new BigNumber(claimed[3]).div(1e18).toFixed(2);
		document.getElementById('glow').innerHTML = new BigNumber(claimed[4]).div(1e18).toFixed(2);
		document.getElementById('everreflect').innerHTML = new BigNumber(claimed[5]).div(1e18).toFixed(2);
	});
	
	var Wallet = document.getElementById("searchAddress").value;
	var tokenBalance;
	BBTF.methods.balanceOf(Wallet).call().then(async function (balance) {
		var v = new BigNumber(balance).div(1e18);
		tokenBalance = v.c[0];
		document.getElementById('tokenAmount').innerHTML = tokenBalance;
		var amount = _web3.utils.toBN("1000000000000000000");
		var tokenPrice = await ROUTER.methods.getAmountsOut(amount, ["0xe7057B10E2B59F46D151588d9C8694B4b8328F44", "0xe9e7cea3dedca5984780bafc599bd69add087d56"]).call();
		// var tokenBnbPrice = await ROUTER.methods.getAmountsOut(amount, ["0xe7057B10E2B59F46D151588d9C8694B4b8328F44", "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"]).call();
		// console.log("tokenbnbPrice", tokenBnbPrice);
		document.getElementById('valueindollar').innerHTML = (tokenBalance * tokenPrice[1] / 1e19).toFixed(0);
		// document.getElementById('bbtf_bnb').innerHTML = tokenBnbPrice;

		var settings = {
			"url": "https://rpc.ankr.com/multichain",
			"method": "POST",
			"timeout": 0,
			"headers": {
				"Content-Type": "text/plain"
			},
			"data": "{\r\n  \"id\": 1,\r\n  \"jsonrpc\": \"2.0\",\r\n  \"method\": \"ankr_getTokenHolders\",\r\n  \"params\": {\r\n    \"blockchain\": \"bsc\",\r\n    \"contractAddress\": \"0xe7057B10E2B59F46D151588d9C8694B4b8328F44\",\r\n    \"pageSize\": 0,\r\n    \"pageToken\": \"\"\r\n  }\r\n}",
		};

		$.ajax(settings).done(function (response) {
			console.log(response);
			$('#holders').text(response.result.holdersCount);
			$('#totalholders').text(response.result.holdersCount);

			const rank = response.result.holders.filter(holder => (new BigNumber(holder.balance)).gt(v)).length + 1;
			$('#position').text(rank);
			response.result.holders.sort((a, b) => b.balance - a.balance);
			let top25 = 0;
			let top50 = 0;
			let top2000 = 0;
			for (let i = 0; i < 25; i++) {
				top25 = top25 + (response.result.holders[i].balance * 1);
			}
			for (let i = 0; i < 50; i++) {
				top50 = top50 + (response.result.holders[i].balance * 1);
			}
			for (let i = 0; i < 2000; i++) {
				top2000 = top2000 + (response.result.holders[i].balance * 1);
			}
			console.log("top25", top25);
			console.log("top50", top50);
			console.log("top2000", top2000);
			google.charts.load('current', { 'packages': ['corechart'] });
			google.charts.setOnLoadCallback(drawChart);

			function drawChart() {
				var data = google.visualization.arrayToDataTable([
					['Task', 'Hours per Day'],
					['Top25', top25],
					['Top50', top50],
					['Top2000', top2000]
				]);

				var options = {
					title: 'Holder Distribution',
					pieHole: 0.8,
					tooltip: { text: 'value' }
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart'));

				chart.draw(data, options);
			}
		});
	});
}