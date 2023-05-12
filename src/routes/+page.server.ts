import { PUBLIC_ADMIN_PWD } from '$env/static/public';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password')?.toString() ?? '';    

        if (!email) {
			return fail(400, { email, missing: true });
		} else if (!password) {
            return fail(400, { password, missing: true });
        } else if (PUBLIC_ADMIN_PWD === btoa(password)) {
            return { success: true };
        } 
    },
} satisfies Actions;

