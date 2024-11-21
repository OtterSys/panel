import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"

export default component$(() => {
    return (
        <>
            <div class="controls">

            </div>
            <div class="server-list">
                <div class="server">

                </div>
            </div>
        </>
    )
})

export const head: DocumentHead = {
    title: "Your Servers",
    meta: [
        {
            name: "description",
            content: "See all of your servers!",
        },
    ],
}
