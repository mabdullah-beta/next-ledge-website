import featuresData from '../../../data/features.json';
import FeaturePageClient from './FeaturePageClient';

export async function generateStaticParams() {
    // Make sure featuresData has the correct structure
    if (!featuresData.features || !Array.isArray(featuresData.features)) {
        console.error('featuresData.features is not an array or is undefined');
        return [];
    }

    return featuresData.features.map((feature) => ({
        id: feature.slug || feature.id.toString(),
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const feature = featuresData.features?.find(item =>
        item.id === parseInt(id) || item.slug === id
    );

    return {
        title: feature?.title ? `${feature.title} | Nexledge Features` : "Feature Not Found",
        description: feature?.shortDescription || "Discover our premium features",
    };
}

export default async function FeaturePage({ params }) {
    const { id } = await params;

    return <FeaturePageClient id={id} />;
}