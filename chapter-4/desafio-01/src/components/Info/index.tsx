import { Grid, GridItem } from '@chakra-ui/react'
import InfoItem from './infoItem'

export default function Info() {
    
    return (
        <Grid
            templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(5, 1fr)"]}
            width="100%"
            maxWidth={1160}
            justifyContent="space-between"
            alignItems="center"
            mt={["10", "32"]}
            mx="auto"
            gap={[1, 5]}
        >
            <GridItem>
                <InfoItem icon="cocktail" text="vida noturna" />
            </GridItem>

            <GridItem>
                <InfoItem icon="group" text="praia" />
            </GridItem>

            <GridItem>
                <InfoItem icon="building" text="moderno" />
            </GridItem>

            <GridItem>
                <InfoItem icon="museum" text="clássico" />
            </GridItem>

            <GridItem colSpan={[2, 2, 2, 1]}>
                <InfoItem icon="earth" text="e mais..." />
            </GridItem>
        </Grid>
    )
}