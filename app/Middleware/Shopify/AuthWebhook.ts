import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'
import ShopifyAuth from 'App/Helpers/Shopify/AuthHelper'


export default class AuthWebhook {
	public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
		if (!ShopifyAuth.verifyWebhook(request)) {
			return response.redirect(Route.makeUrl('login'))
		}
		await next()
	}
}
