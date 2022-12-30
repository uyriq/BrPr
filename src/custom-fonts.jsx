import { Global } from '@mantine/core'
import bold from './shared/fonts/BlenderPro-Bold.woff2'
import normal from './shared/fonts/BlenderPro-Book.woff2'

export function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'BlenderProBook,sans-serif',
                        src: `url('${bold}') format("woff")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'BlenderProBook,sans-serif',
                        src: `url('${normal}') format("woff")`,
                        fontWeight: 300,
                        fontStyle: 'normal',
                    },
                },
            ]}
        />
    )
}
