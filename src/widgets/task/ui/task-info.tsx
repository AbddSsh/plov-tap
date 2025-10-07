import {
	Banknote,
	CheckCircle,
	Clock,
	CreditCard,
	Download,
	ExternalLink,
	Gift,
	MapPin,
	Shield,
	Smartphone,
	Star
} from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const TaskInfo = () => {
	const { id } = useParams<{ id: string }>();
	// for api
	console.log(id);
	const [currentStep, setCurrentStep] = useState(0);

	const steps = [
		{
			id: 1,
			title: "Перейти на сайт AloqaBank",
			description:
				"Нажмите кнопку ниже для перехода на официальный сайт банка",
			icon: ExternalLink,
			completed: false
		},
		{
			id: 2,
			title: "Выбрать тип карты",
			description: "Выберите UZCARD или HIMO карту на сайте",
			icon: CreditCard,
			completed: false
		},
		{
			id: 3,
			title: "Заполнить заявку",
			description: "Заполните все необходимые данные для получения карты",
			icon: Download,
			completed: false
		},
		{
			id: 4,
			title: "Ожидать доставку",
			description:
				"Карта будет доставлена бесплатно в течение 1-3 банковских дней",
			icon: MapPin,
			completed: false
		},
		{
			id: 5,
			title: "Получить бонусы",
			description:
				"После получения карты вы получите 150,000 бонусных рисинок",
			icon: Gift,
			completed: false
		}
	];

	const features = [
		{
			icon: Shield,
			title: "Безопасно",
			description: "Официальный партнер с лицензией"
		},
		{
			icon: Clock,
			title: "Быстро",
			description: "Доставка за 1-3 банковских дня"
		},
		{
			icon: Banknote,
			title: "Бесплатно",
			description: "Выпуск и доставка карты бесплатно"
		},
		{
			icon: Star,
			title: "Бонусы",
			description: "150,000 рисинок за выполнение"
		}
	];

	return (
		<div className="grid grid-flow-row gap-8">
			{/* Header Section */}
			<div className="grid grid-flow-row justify-items-center items-center gap-6 text-center">
				<div className="grid grid-flow-row gap-6">
					<div className="inline-flex items-center gap-2 bg-gradient-to-r from-second-color/10 to-second-color/80 px-4 py-2 rounded-full w-fit">
						<CreditCard className="size-5 text-font-color" />
						<span className="text-sm font-semibold text-font-color">
							Задание от AloqaBank
						</span>
					</div>

					<h1 className="text-xl font-bold bg-gradient-to-r from-main-color to-btn-color bg-clip-text text-transparent">
						Откройте карту UZCARD/HUMO бесплатно
					</h1>

					<p className="text-sm font-semibold text-font-color/80 max-w-[90%]">
						Откройте бесплатно банковскую карту в AloqaBank и
						получите 150 000 бонусных рисинок
					</p>
				</div>

				{/* Reward Card */}
				<div className="bg-gradient-to-br from-main-color/10 to-btn-color/10 rounded-3xl p-6 border-2 border-main-color/20 w-full max-w-md">
					<div className="grid grid-flow-row gap-4 text-center">
						<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-main-color to-btn-color rounded-full mx-auto">
							<Gift className="size-8 text-font-color stroke-[1px]" />
						</div>
						<div>
							<p className="text-2xl font-bold text-main-color">
								150 000
							</p>
							<p className="text-sm font-medium text-font-color/80">
								бонусных рисинок
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Features Grid */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{features.map((feature, index) => (
					<div
						key={index}
						className="bg-second-color/10 rounded-2xl p-4 text-center"
					>
						<div className="inline-flex items-center justify-center w-12 h-12 bg-main-color/20 rounded-full mb-3 mx-auto">
							<feature.icon className="size-6 text-main-color" />
						</div>
						<h3 className="font-bold text-sm text-font-color mb-1">
							{feature.title}
						</h3>
						<p className="text-xs text-font-color/60">
							{feature.description}
						</p>
					</div>
				))}
			</div>

			{/* Steps Section */}
			<div className="grid grid-flow-row gap-6">
				<h2 className="text-xl font-bold text-center text-main-color">
					Как получить карту
				</h2>

				<div className="grid grid-flow-row gap-4">
					{steps.map((step, index) => (
						<div
							onClick={() => setCurrentStep(index)}
							key={step.id}
							className={`grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 rounded-xl transition-all ${
								index === currentStep
									? "bg-gradient-to-r from-main-color/10 to-btn-color/10 border-2 border-main-color/30"
									: "bg-second-color/10 border-2 border-transparent"
							}`}
						>
							<div
								className={`w-10 h-10 rounded-full flex items-center justify-center ${
									index < currentStep
										? "bg-green-500 text-white"
										: index === currentStep
											? "bg-main-color text-white"
											: "bg-second-color/30 text-font-color/60"
								}`}
							>
								{index < currentStep ? (
									<CheckCircle className="size-5" />
								) : (
									<span className="font-bold">{step.id}</span>
								)}
							</div>

							<div className="grid grid-flow-row gap-1">
								<h3 className="text-base font-bold text-font-color">
									{step.title}
								</h3>
								<p className="text-xs font-medium text-font-color/70">
									{step.description}
								</p>
							</div>

							<div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-second-color/20">
								<step.icon className="size-4 text-font-color/60" />
							</div>
						</div>
					))}
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-gradient-to-br from-main-color/10 to-btn-color/10 rounded-3xl p-8 text-center">
				<div className="grid grid-flow-row gap-6 mx-auto">
					<div className="grid grid-flow-row gap-4">
						<h2 className="text-xl font-bold text-main-color">
							Готовы начать?
						</h2>
						<p className="text-xs font-medium text-font-color/80">
							Нажмите кнопку ниже, чтобы перейти на сайт AloqaBank
							и оформить карту
						</p>
					</div>

					<div className="grid grid-flow-row gap-4">
						<a
							href="https://aloqabank.uz"
							target="_blank"
							className="flex items-start justify-between gap-2 px-4 py-3 bg-gradient-to-r from-main-color to-btn-color text-font-color font-bold rounded-xl"
						>
							<p className="text-sm font-medium">
								Перейти на сайт AloqaBank
							</p>
							<ExternalLink className="size-5" />
						</a>
					</div>
				</div>
			</div>

			{/* Additional Info */}
			<div className="grid grid-flow-row gap-6 bg-second-color/5 rounded-3xl p-5">
				<h3 className="text-xl font-bold text-main-color text-center">
					Дополнительная информация
				</h3>

				<div className="grid grid-flow-row gap-4">
					<div className="grid grid-flow-col gap-3 items-start">
						<Shield className="size-5 text-main-color mt-1" />
						<div>
							<h4 className="font-bold text-font-color mb-1">
								Безопасность
							</h4>
							<p className="text-xs font-medium text-font-color/70">
								AloqaBank - лицензированный банк с полной
								защитой ваших данных и средств
							</p>
						</div>
					</div>

					<div className="grid grid-flow-col gap-3 items-start">
						<MapPin className="size-5 text-main-color mt-1" />
						<div>
							<h4 className="font-bold text-font-color mb-1">
								Доставка
							</h4>
							<p className="text-xs font-medium text-font-color/70">
								Бесплатная доставка карты прямо к вам домой в
								течение 1-3 банковских дней
							</p>
						</div>
					</div>

					<div className="grid grid-flow-col gap-3 items-start">
						<Smartphone className="size-5 text-main-color mt-1" />
						<div>
							<h4 className="font-bold text-font-color mb-1">
								Управление
							</h4>
							<p className="text-xs font-medium text-font-color/70">
								Удобное управление картой через мобильное
								приложение AloqaBank
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
