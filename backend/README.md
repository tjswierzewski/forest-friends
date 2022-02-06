## API Details

### API - /listAll
API Type :      GET
Descrption :    Get all NFTs in the database
Input Payload : NA

### API - /getOwnerNFTs
API Type :      GET
Descrption :    Get all NFTs for the specific owner address
Input Payload : {
                "owner" : "92092"
                }

### API Name - /createOwnerNFT
API Type :      POST
Descrption :    Update the owner address of the NFT in the database
Input Payload : {
                "owner": "92092",
                "nft_id": "KEVIN"
                }

### API Name - getResearcherNFTs
API Type :      GET
Descrption :    Get all NFTs for a specific speicie researcher
Input Payload : {
                "owner" : "91934"
                }
