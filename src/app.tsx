import { AppShell, Button, Group, MantineProvider, Navbar, Stack, Aside, Text } from '@mantine/core'
import { CustomFonts } from './custom-fonts'
import { ApplicationContainer as Component } from './app-container'
import Home from './home'

function App() {
    const pageProps = { undefined }
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: 'dark',
                // use custom font in MantineProvider
                fontFamily: 'BlenderProBook,sans-serif',
            }}
        >
            <CustomFonts />
            <Component {...pageProps}>
                <Home />
            </Component>
        </MantineProvider>
    )
}
export default App
